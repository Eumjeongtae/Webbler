$(function () {
  prjArr.forEach(function (v) {
    let { slogun, title, id } = v
    title = title.join(' ')
    $('.works-content').append(`
      <figure>
        <a href='./detail.php?id=${id}'>
          <div>
            <img src="./img/works/site${id}.jpg" alt>  
          </div>
          <figcaption>
            <h2>
              ${title}
            </h2>
            <p>
              <span>${slogun}</span>
              <span>${slogun}</span>
              <span>${slogun}</span>
            </p>
          </figcaption>
        </a>
        
      </figure>
    `)
  });


  var isStartMotion = true;
  var rafId

  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      $('.works-content figure').each(function () {
        var t = $(this).offset().top
        var h = $(this).innerHeight()
        var meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * 0.03
        if (meta > 12) meta = 12
        if (meta < -12) meta = -12
        $(this).find('img').css({ 'transform': `scale(1.2) translateY(${meta}%)` })
      })

      var scrollRange = $(document).innerHeight()- winh
      var moveRange = winw - $('.bg-text').innerWidth()

      var x = (scry / scrollRange)  *moveRange
      $('.bg-text').css({'transform':`translateX(${x}px)`})

      isStartMotion = true
    })

  }

  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()
  }).resize(function () {
    scrollMotion()
  })


  var cx = 0
  var tx = 0
  var cy = 0
  var ty = 0

  $(window).mousemove(function (e) {
    tx = e.clientX -40
    ty = e.clientY -40//마우스 죄표
    // $('.cusor').css({
    //   'top':my-40,
    //   'left':mx-40
    // })
  })


  var isStartMotion = true;
  var rafId

  var cusorMotion = function () {
    cx +=(tx - cx) * 0.1
    cy +=(ty - cy) * 0.1

    $('.cusor').css({
      'left':cx,
      'top':cy
    })
    
    rafId = requestAnimationFrame(function () {
      cusorMotion()
    })

  }

  cusorMotion()
  // setInterval(function(){
    // cx +=(tx - cx) * 0.1
    // cy +=(ty - cy) * 0.1

    // $('.cusor').css({
    //   'left':cx,
    //   'top':cy
    // })
  // },20)

  $('.works-content figure').mouseenter(function(){
    $('.cusor').css({'transform':'scale(1)'})
  }).mouseleave(function(){
    $('.cusor').css({'transform':'scale(0)'})

  })
})//ready