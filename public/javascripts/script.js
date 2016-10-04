$("#submit-item").click(function(event){
    event.preventDefault()
})

function submitItem() {
  var url = "/item?" + $.param({
    item_code: $("input[name=item_code]").val(),
    item_name: $("input[name=item_name]").val(),
    description: $("input[name=description]").val(),
    price: $("input[name=price]").val(),
    stock: $("input[name=stock]").val()
  });
  $.post({
    url: url
  })
  loadItem()
}

function loadItem() {
  var ul = $("#items")
  ul.empty()

  $.getJSON({
      url: "/item",
      success: (items) => {
        var list = []
    	  $.each(items, function(id, item) {
          list.push(`<li>id: ${id} | name: ${item.name} | code: ${item.item_code}</li>`)
        })
        ul.append(list.join(''))
      }
    })
}

$( document ).ready(function() {
    loadItem()
});
