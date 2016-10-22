function postItem(result) {
  $.post({
      url : "http://localhost:8080/api/items",
      data : {
          "name":$('#txt-name').val().trim()
      },
      success:function(result) {
        getItems()
      }
  })
}

function getItems() {
    $.get({
        url: "http://localhost:8080/api/items",
        success: function(result) {
            console.log(result);
            var p_list = $("ul#item-list")
            p_list.empty()
            for (var idx = 0; idx < result.length; idx++) {
                var html = `<li><h3>${result[idx].name}</h3></li>`
                p_list.append(html)
            }
        }
    })
}

$(function() {
    getItems()
    $("#form-item").unbind().on("submit",function(event) {
      event.preventDefault()
      postItem()
    })
})
