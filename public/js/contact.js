$('#submit').on('click', () => {
   onSubmit()
})
$('input, textarea').blur(function () {
   if ($(this).val() == '') {
      $(this).addClass('badMsgB')
      $(this).attr(
         'placeholder',
         $(this)
            .attr('placeholder')
            .replace('Please Enter ', '')
      )
      $(this).attr(
         'placeholder',
         'Please Enter ' +
            $(this).attr('placeholder')
      )
   } else {
      $(this).attr(
         'placeholder',
         $(this)
            .attr('placeholder')
            .replace('Please Enter ', '')
      )
      $(this).removeClass('badMsgB')
   }
})
function onSubmit(token) {
   const data = $(
      '#contactMessageForm'
   ).serializeArray()
   function validate(data) {
      function isValidEmail(email) {
         var re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         return re.test(email)
      }
      $('actionMessage').removeClass('badMsg')
      $('input, textarea').removeClass('badMsgB')
      const alert = []
      for (let i = 0; i < data.length; i++) {
         if (data[i]['value'] == false) {
            alert.push(data[i]['name'])
            $('#' + data[i]['name']).addClass(
               'badMsgB'
            )
         } else if (
            data[i]['name'] == 'email' &&
            isValidEmail(data[i]['value']) != true
         ) {
            console.log('not an email')
            alert.push(data[i]['name'])
            $('#email').addClass('badMsgB')
         }
      }
      if (alert.length == 0) {
         $('#actionMessage').show(
            'slow',
            function () {
               setTimeout(() => {
                  $('#actionMessage').hide(
                     'slow',
                     'swing'
                  )
               }, 3000)
            }
         )
         $('#actionMessage').addClass('sentMsg')
         $.post(
            '/api/send.php',
            $('#contactMessageForm').serialize(),
            function (res) {
               if (res.pass == 1) {
                  $('#actionMessage').html(
                     res.message
                  )
                  const inputs =
                     document.querySelectorAll(
                        'input'
                     )
                  for (
                     let i = 0;
                     i < inputs.length;
                     i++
                  ) {
                     inputs[i].value = ''
                  }
                  const textarea =
                     document.getElementById(
                        'msg'
                     )
                  textarea.value = ''
               } else {
                  $('#actionMessage').show('slow')
                  $('#actionMessage').removeClass(
                     'sentMsg'
                  )
                  $('#actionMessage').addClass(
                     'badMsg'
                  )
                  $('#actionMessage').html(
                     res.error.message
                  )
               }
            },
            'json'
         )
      } else {
         $('#actionMessage').addClass('badMsg')
         $('#actionMessage').show('slow')
         $('#actionMessage').html(
            'Please fill out all fields'
         )
      }
   }
   validate(data)
}
