<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>
</head>
<body>
    <button onclick="saveData()">Save Data</button>

    <script>
        function saveData() {
            // مثال على بيانات الحساب
            const accountData = [
                { student_code: "12345", email: "student@example.com", password: "password123", name: "John", surname: "Doe" }
            ];

            // مثال على بيانات الطالب
            const studentData = [
                { name: "John", surname: "Doe", student_code: "12345", gender: "Male", school_name: "XYZ School", educational_level: "Middle", grade: "First Year", height: 150, weight: 50, shoe_size: 40, state: "State", municipality: "Municipality", phone_number: "1234567890" }
            ];

            // مثال على بيانات المؤسسة
            const institutionData = [
                { institution_name: "XYZ School", educational_level: "Middle", state: "State", municipality: "Municipality", current_number_of_students: 500, expected_increase: 50 }
            ];

            // دالة لحفظ البيانات في ملف Excel
            function saveToExcel(data, filename) {
                const ws = XLSX.utils.json_to_sheet(data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                XLSX.writeFile(wb, filename);
            }

            // حفظ البيانات في ملفات Excel
            saveToExcel(accountData, "accounts.xlsx");
            saveToExcel(studentData, "students.xlsx");
            saveToExcel(institutionData, "institutions.xlsx");
        }
    </script>
</body>
</html>
