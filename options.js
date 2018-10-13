// Saves options to chrome.storage
function save_options() {
  var doremove = document.getElementById('doremove').checked;
  chrome.storage.sync.set({
    doremove: doremove
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
  chrome.storage.local.set({'doremove': doremove});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Set default to remove things
  chrome.storage.sync.get({
    doremove: false
  }, function(items) {
    document.getElementById('doremove').checked = items.doremove;
    console.log("saved");
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
