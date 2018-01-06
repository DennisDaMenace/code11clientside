'use strict';

$('#submitNewButton', '#submitUpdateButton').on('click', () => $.post('/PLACEHOLDER-URL(NEED TO CHANGE)', { author: this.author, title: this.title }))
  .then(data => {
    console.log(data);
    if (callback) callback();
  });