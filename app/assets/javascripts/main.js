(function($, window, document, undefined) {

    var _cfg = {
        docBody: $('body'),
        payeeConfirmation: 'You have successfully added new payee!',
        paymentConfirmation: 'You have successfully made a payment!'
    };


    var _bankAccount = {

        init: function() {

            _bankAccount.handleViews();
            _bankAccount.savePayee();
            _bankAccount.payment();
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
                    $('#bank').val('');
                    $('#iban').val('');

                    _bankAccount.modalConfirmation( _cfg.payeeConfirmation );
                }

            });

        },

        addNewPayee: function( newPayee ) {    
            var payeeField = '<div class="payeeField">' + newPayee + '</div>';

            $('.choosePayee').find('.noPayee').remove();
            $('.choosePayee').append( payeeField );
        },

        payment: function() {
            var selected = false;

            $('body').on('click', '.payeeField', function() {
                $('.payeeField').each(function() {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');
                selected = true;
            });

            $('.sendPayment').on('click', function(e) {
                e.preventDefault();

                // if selected payee and amount exists
                if (selected && $('#amount').val()) {
                    _bankAccount.modalConfirmation( _cfg.paymentConfirmation );
                    $('#amount').val('');
                    $('#date').val('');
                }
            });
        },

        modalConfirmation: function( text ) {
            $('.modalConfirm').modal().find('.modal-content').text( text );
            setTimeout(function(){
                $(".modalConfirm").modal('hide');
            }, 2500);
        }

    };


    $(function(){
        _bankAccount.init();
    });


})(jQuery, window, document);