# Risk & Quality Analysis – Transaction History Feature

## 1. Date Filter Without Visible Dates

This may not be considered a bug if the filtering logic is correctly implemented in the backend.
However, it represents a **significant usability and transparency risk**.

### Observation

The system provides a date filter for transaction history, but transaction entries do not display any date information.

Users are unable to verify whether the filtered results correspond to the selected date range.

### Identified Risks

* Lack of transparency in filtered data  
* Reduced user trust in the system  
* Inability for users to validate system behavior  
* Potential confusion when analyzing transactions  

### Improvement Suggestion

* Display the transaction date in each list item  
* Use a clear and consistent date format (e.g., DD/MM/YYYY or locale-based)  
* Ensure alignment between filter criteria and visible data  

### Expected Benefits

* Increased transparency and user trust  
* Improved usability and data validation by users  
* Better alignment between UI and system behavior  
* Enhanced user experience when analyzing transactions  

---

## 2. Value Filter Limitation and Usability Issues

This may be considered a **functional limitation combined with a usability issue**, depending on system requirements.
It represents a **risk to data accessibility and user experience**.

### Observation

The transaction value filter uses a slider with a fixed range from $0 to $1000.

However:

* The system allows transactions above $1000  
* The slider makes it difficult to select precise values  

### Identified Risks

* Inability to filter all valid transactions  
* Difficulty in locating specific transaction values  
* Poor precision in user input  
* Frustration during filtering interactions  

### Improvement Suggestion

* Extend the filter range to support all possible transaction values  
* Add input fields for manual value entry (min/max)  
* Optionally combine slider with manual input for better usability  

### Expected Benefits

* Full coverage of all transaction values in filtering  
* Improved accuracy in user-defined filters  
* Enhanced usability and interaction control  
* Better overall user experience when searching transactions  

---

## Conclusion

The analysis identified weaknesses related to:

* Usability and user experience  
* Data visibility and transparency  
* Alignment between UI and system capabilities  

Improving how information is displayed and how filters behave will significantly enhance user trust, efficiency, and overall product quality.