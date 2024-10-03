# Chinese Character Practice Sheet Generator
## About
This application generates a sheet for Chinese character practice, designed to aid learners in writing characters with proper stroke order. Each line on the sheet begins with a single Chinese character, annotated with stroke order numbers. Following each character, the line contains empty squares equipped with guiding lines—vertical, horizontal, and diagonal—to simplify the process of writing the character accurately.

## Technical notes
- **Technologies Used:**
    - **HTML5:** Structures the layout of the application.
    - **Tailwind CSS:** Utilizes a utility-first CSS framework for styling and responsive design.
    - **JavaScript:** Handles application logic and interactivity.
    - **Libraries:**
        - **jsPDF:** Facilitates the generation of PDF documents from the canvas.
        - **html2canvas:** Captures the canvas content as an image for PDF conversion.
    - **Custom Font:** Implements the `KanjiStrokeOrders` font to display stroke order numbers accurately.

- **Basic Mechanics:**
    - **User Input:** Users enter a sequence of Chinese characters into the text field.
    - **Generation Process:** Upon clicking the "Generate" button, the application creates a canvas displaying each character with its stroke order numbers, followed by a grid of empty squares with guiding lines.
    - **Overlay Display:** An overlay div appears over the canvas to confirm the generation process and provide options to save the sheet.
    - **PDF Export:** Users can save the generated practice sheet as a PDF document by clicking the "Save as PDF" button, which utilizes `jsPDF` and `html2canvas` to capture and convert the canvas content.

## Deployment
This project is deployed on GitHub Pages. You can access it via the following URL:

[https://ideruga.github.io/chineseworksheets](https://ideruga.github.io/chineseworksheets)