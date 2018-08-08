/**
* Next Unread script is a Javascript local injection that helps you navigate a Collaborator review.
* 
* How to use:
* 1. Simply create a bookmark with the content of this script.
* 2. Dock it on your bookmarks bar for ease of use.
* 3. Open a review in Collaborator.
* 4. Click on the bookmark and it should snap to the next unread item in the review.
*
* Notes:
* Occassionally, the unread count would have a mishap and the bookmark will not jump to the next unread item. This usually happens
* when a new comment gets added while traversing the unread items. Simply refresh the page and try again.
*/

javascript: document.mainFn = function() {
    document.nextUnread ? document.nextUnread : (document.unreadConvos = document.querySelectorAll("#unreadConvoId"), document.unreadCount = document.unreadConvos.length, document.unreadCounter = 0, document.nextUnread = function() {
        document.unreadCount > 0 ? (document.unreadConvos[document.unreadCounter++].scrollIntoView(!1), document.unreadCounter >= document.unreadCount && (document.unreadCounter = 0)) : console.log("No unread conversations.")
    }), document.nextUnread()
}, document.mainFn();
