(function($, window, document, undefined) {

    var _cfg = {
        docBody: $('body'),
        inputPayee: $('#payeeName'),
        savePayee: $('.savePayee')
    };


    var _bankAccount = {

        init: function() {

            _bankAccount.handleViews();
            _bankAccount.savePayee();
        },

        handleViews: function() {

            $('.changeView').on('click', function() {
                var showView = $(this).data('view');

                // change active state for nav
                $('.changeView').each(function() {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');

                // change active view
                $('.setView').each(function() {
                    $(this).addClass('hide');
                });
                $('.' + showView).removeClass('hide');

                return false;
            });

            $('.addPayee').on('click', function() {
                var showView = $(this).data('view');

                $('.setView').each(function() {
                    $(this).addClass('hide');
                });
                $('.' + showView).removeClass('hide');
            });
        },

        savePayee: function() {

            $('#payeeName').keyup(function(){

                if ( $(this).val() ) {
                    $(this).removeClass('error');
                    $(this).addClass('success');
                } else {
                    $(this).removeClass('success');
                    $(this).addClass('error');
                }
            });

            $('.savePayee').on('click', function(e) {
                e.preventDefault();

                if ( $('#payeeName').hasClass('success') ) {
                    var newPayee = $('#payeeName').val();
                    _bankAccount.addNewPayee( newPayee );
                    $('#payeeName').val('');
                }

            });

        },

        addNewPayee: function( newPayee ) {    
            var payeeField = '<div class="payeeField">' + newPayee + '</div>';

            $('.choosePayee').find('.noPayee').remove();
            $('.choosePayee').append( payeeField );
        }

    };


    $(function(){
        _bankAccount.init();
    });


})(jQuery, window, document);