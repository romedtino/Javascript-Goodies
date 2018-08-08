/**
* Click Unread script is a javascript local injection that can help navigate Collaborator reviews.
* 
* How to use:
* 1. Create a new bookmark and paste the contents of the script in the URL.
* 2. Open a Collaborator review.
* 3. Click on the bookmark and it should automatically open the file which contains an unread item.
*
* Notes:
* Occasionally, the bookmark would fail to click on the next unread item. This is usually caused by a new unread item added while traversing
* the unread items sequentially. Simply refresh the page and try again.
*/

javascript: document.mainFn = function() {
    document.clickUnread ? document.clickUnread : (document.unreadConvos = document.querySelectorAll("#unreadConvoId"), document.unreadCount = document.unreadConvos.length, document.unreadCounter = 0, document.clickUnread = function() {
        if (document.unreadCount > 0) {
            var n = document.unreadConvos[document.unreadCounter++].getElementsByTagName("a");
            document.unreadCounter >= document.unreadCount && (document.unreadCounter = 0), n[0].click()
        } else console.log("No unread conversations.")
    }), document.clickUnread()
}, document.mainFn();
