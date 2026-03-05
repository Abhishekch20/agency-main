import requests
import sys
import json
from datetime import datetime

class SyntrixAPITester:
    def __init__(self, base_url="https://stripe-style-clone.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        default_headers = {'Content-Type': 'application/json'}
        if headers:
            default_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=default_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=default_headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        json_response = response.json()
                        print(f"   Response: {json.dumps(json_response, indent=2)[:200]}...")
                    except:
                        print(f"   Response: {response.text[:100]}...")
            else:
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text[:200]
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")

            return success, response.json() if success and response.content else {}

        except requests.exceptions.ConnectionError as e:
            print(f"❌ Failed - Connection Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "expected": expected_status,
                "actual": "Connection Error",
                "response": str(e)
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "expected": expected_status,
                "actual": "Exception",
                "response": str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET", 
            "api/",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "John Doe",
            "email": "john@example.com", 
            "company": "Test Company",
            "message": "This is a test message from automated testing."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success and response:
            required_fields = ['id', 'name', 'email', 'message', 'created_at']
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                print(f"❌ Missing response fields: {missing_fields}")
                return False, response
            else:
                print(f"✅ All required fields present in response")
                
        return success, response

    def test_contact_form_missing_required(self):
        """Test contact form with missing required fields"""
        test_data = {
            "name": "John Doe",
            # Missing email and message
            "company": "Test Company"
        }
        
        return self.run_test(
            "Contact Form - Missing Required Fields",
            "POST",
            "api/contact",
            422,  # Validation error expected
            data=test_data
        )

    def test_get_contacts(self):
        """Test getting contacts list"""
        return self.run_test(
            "Get Contacts List",
            "GET",
            "api/contacts",
            200
        )

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test POST status
        test_data = {"client_name": "test_client_api"}
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )
        
        if success:
            # Test GET status
            self.run_test(
                "Get Status Checks",
                "GET",
                "api/status", 
                200
            )
        
        return success, response

def main():
    print("🚀 Starting Syntrix Technologies API Testing...")
    print("=" * 60)
    
    # Setup
    tester = SyntrixAPITester()
    
    # Test API connectivity first
    print("\n📡 Testing API Connectivity...")
    api_success, _ = tester.test_api_root()
    
    if not api_success:
        print("❌ API connectivity failed. Stopping tests.")
        print(f"\n📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
        return 1

    print("\n📝 Testing Contact Form Functionality...")
    contact_success, contact_response = tester.test_contact_form_submission()
    
    if contact_success:
        print("✅ Contact form submission working correctly")
    else:
        print("❌ Contact form submission failed")

    print("\n🔍 Testing Validation...")
    tester.test_contact_form_missing_required()

    print("\n📋 Testing Contact Retrieval...")
    tester.test_get_contacts()

    print("\n⚡ Testing Status Endpoints...")
    tester.test_status_endpoints()

    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print(f"\n❌ Failed Tests ({len(tester.failed_tests)}):")
        for i, failed_test in enumerate(tester.failed_tests, 1):
            print(f"  {i}. {failed_test['test']}")
            print(f"     Expected: {failed_test['expected']}, Got: {failed_test['actual']}")
            if failed_test['response']:
                print(f"     Response: {failed_test['response']}")

    success_rate = (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
    print(f"\n📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if success_rate >= 80 else 1

if __name__ == "__main__":
    sys.exit(main())