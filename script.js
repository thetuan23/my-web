// const next = document.querySelector('.next')
// const prev = document.querySelector('.prev')
// const comment = document.querySelector('#list-comment')
// const commentItem = document.querySelectorAll('#list-comment .item')
// var translateY = 0
// var count = commentItem.length

// next.addEventListener('click', function (event) {
//   event.preventDefault()
//   if (count == 1) {
//     // Xem hết bình luận
//     return false
//   }
//   translateY += -400
//   comment.style.transform = `translateY(${translateY}px)`
//   count--
// })

// prev.addEventListener('click', function (event) {
//   event.preventDefault()
//   if (count == 3) {
//     // Xem hết bình luận
//     return false
//   }
//   translateY += 400
//   comment.style.transform = `translateY(${translateY}px)`
//   count++
// })






$(document).ready(function(){
    let count_move = 0;
    let list_cmt = $('#list-comment').find('.item').map(function(){
      return $(this);
    }).get();
    let list_cmt_len = list_cmt.length;
    for(let i = 0; i < list_cmt_len; i++){
      list_cmt[i].css({
        'left': `${100 * i}%`
      })
    }

    $(document).on('mousedown', '.next', function(){
      count_move++;
      let check = false;
      for(let i = 0; i < list_cmt_len; i++) {
        let wd_item = parseInt(list_cmt[i].width());
        if(count_move < list_cmt_len){
          list_cmt[i].css({
            'transform': `translateX(${-wd_item * count_move}px)`
          })
        }
        else{
          list_cmt[i].css({
            'transform': `translateX(0)`
          })
          check = true;
        }
      }
      if(check == true){
        count_move = 0;
      }
    })

    $(document).on('mousedown', '.prev', function(){
      count_move--;
      let check = false;
      for(let i = 0; i < list_cmt_len; i++) {
        let wd_item = parseInt(list_cmt[i].width());
        if(count_move < 0){
          list_cmt[i].css({
            'transform': `translateX(${wd_item * list_cmt_len})`
          })
          check = true;
        }
        else{
          list_cmt[i].css({
            'transform': `translateX(${-wd_item * count_move}px)`
          })
        } 
      }
      if(check == true){
        count_move = list_cmt_len;
        $('.prev').mousedown();
      }
    })
})


