$(function () {
  var url = new URL(location.href)
  var params = new URLSearchParams(url.search)
  var paramId = params.get('id')
  var dataObj = prjArr.find(v => v.id === parseInt(paramId))
  var { id, title, desc, slogun, definition, client, type, scope } = dataObj
  $('.mockup-img').attr('src', `./img/details${id}/mockup.jpg`)
  $('.detail-img').attr('src', `./img/details${id}/detail.jpg`)
  $('.screen-img').attr('src', `./img/details${id}/screen.jpg`)
  $('section.detail .slogun').html(slogun)
  $('section.detail .definition').html(definition)
  $('section.detail .client').html(client)
  $('section.detail .type').html(type)
  $('section.detail .scope').html(scope)
  $('.section-summary .desc').html(scope)

  title.forEach(v => {
    $('.section-summary h2').append(`<b><i>${v}</i></b><br>`)

  });
})//ready


$(function () {

  var isStartMotion = true;
  var rafId

  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      var t = $('section.detail .textbox').offset().top
      if (scry > t - winh * 0.9) $('section.detail .textbox').addClass('active')
      else $('section.detail .textbox').removeClass('active')
      isStartMotion = true
    })

  }

  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()


  }).resize(function () {
    scrollMotion()



  })
})//ready

