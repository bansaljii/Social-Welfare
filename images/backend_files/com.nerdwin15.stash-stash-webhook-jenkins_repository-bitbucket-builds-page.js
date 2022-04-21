;
/* module-key = 'com.nerdwin15.stash-stash-webhook-jenkins:repository-bitbucket-builds-page', location = '/static/repository-bitbucket-builds-page.js' */
goog.exportPath_('com.nerdwin15.stash.webhook');
com.nerdwin15.stash.webhook.bitbucketBuildsSupported = function() {
  return true;
}


define('plugin/jenkins/repository-bitbucket-builds-page', [], function () {

  function adjustBitbucketBuildsButton() {
    const buildsButton = AJS.$("#repository-nav-builds");
    if (buildsButton !== undefined && AJS.$(".show-bitbucket-builds").length === 0) {
      buildsButton.hide();
    }
  }

  adjustBitbucketBuildsButton();

});

AJS.$(document).ready(function () {
  require('plugin/jenkins/repository-bitbucket-builds-page');
});

;
//# sourceMappingURL=/download/batch/com.nerdwin15.stash-stash-webhook-jenkins:repository-bitbucket-builds-page/com.nerdwin15.stash-stash-webhook-jenkins:repository-bitbucket-builds-page.js.map?_statichash=d41d8cd98f00b204e9800998ecf8427e-T%2F-882517457%2F892d5b2%2F1%2F5.8.1