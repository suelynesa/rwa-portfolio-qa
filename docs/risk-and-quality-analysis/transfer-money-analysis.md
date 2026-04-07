# Risk & Quality Analysis – Money Transfer Feature

## 1. Mandatory Note Requirement

This may not be considered a bug if the requirement was intentionally defined this way.
However, it represents a **usability and user experience risk**.

### Observation

The system requires users to enter a note in order to complete a money transfer.

* The transaction is blocked if the note field is empty  
* Users are forced to provide input that may not be relevant  

### Identified Risks

* Unnecessary friction in a critical user flow  
* Increased time to complete transactions  
* Potential user frustration  
* Higher risk of user drop-off during the transfer process  

### Improvement Suggestion

* Make the note field optional  
* Keep validation only for essential fields (e.g., amount, recipient)  

### Expected Benefits

* Faster and smoother transaction flow  
* Improved user experience and satisfaction  
* Reduced friction in critical operations  
* Better alignment with common banking application behavior  

---

## 2. Lack of Back Navigation in Transfer Flow

This may not be considered a bug if navigation constraints were not defined.
However, it represents a **usability and flow efficiency risk**.

### Observation

After selecting a contact and proceeding to the transfer amount step:

* Users cannot go back to change the selected contact  
* The entire process must be restarted to correct a selection  

### Identified Risks

* Increased effort to recover from user mistakes  
* Reduced efficiency in multi-step interactions  
* Higher likelihood of user frustration  
* Poor overall user experience  

### Improvement Suggestion

* Add a back button in the transfer flow  
* Allow users to return to previous steps  
* Preserve previously entered data when navigating  

### Expected Benefits

* Improved usability and user control  
* Reduced effort in correcting mistakes  
* More efficient and flexible user flow  
* Better overall interaction experience  

---

## 3. Post-Transaction Navigation Behavior

This may not be considered a bug if the redirection behavior was intentionally designed this way.
However, it represents a **user flow and expectation alignment risk**.

### Observation

After completing a transfer:

* The "Return to Transactions" button redirects to the **Everyone** tab  
* The user’s own transactions are not immediately visible  

### Identified Risks

* Misalignment with user expectations after completing an action  
* Difficulty in confirming recent transactions  
* Confusing navigation flow  
* Reduced user confidence in the system  

### Improvement Suggestion

* Redirect users to the **Mine** tab after completing a transfer  
* Ensure the most recent transaction is visible or highlighted  

### Expected Benefits

* Better alignment with user expectations  
* Easier verification of completed transactions  
* Improved navigation clarity  
* Increased user trust and confidence in the system  

---

## Conclusion

The analysis identified weaknesses related to:

* Usability and user experience  
* Navigation and flow efficiency  
* Alignment with user expectations in critical actions  

Improving flow flexibility, reducing unnecessary constraints, and aligning post-action behavior with user needs will significantly enhance the overall quality and reliability of the feature.