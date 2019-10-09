(function (){

      $('.list-block-header').click(function(){
            if ($(this.parentNode).attr('data-status') === 'false'){
                  let blockInfo = document.createElement('div');
                  blockInfo.className = 'list-block-info';
                  blockInfo.innerHTML = `
                        <img src='./img/statistics.jpg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  `;
                  $('.list-block-info').remove();
                  $('.list-block').attr('data-status','false');
                  $(this.parentNode).append(blockInfo);
                  $(this.parentNode).attr('data-status','true');
            }else{
                  $(this.parentNode.lastChild).remove();
                  $(this.parentNode).attr('data-status','false');
            }
      });
      
})();