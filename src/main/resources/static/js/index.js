$(function(){
	window.setTimeout(function() {
	    $(".alert").fadeTo(500, 0).slideUp(500, function(){
	        $(this).remove(); 
	    });
	}, 3000);

	$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event) {
		
		const button = $(event.relatedTarget);
		const codigoTitulo = button.data('codigo');
		const descricaoTitulo = button.data('descricao');
		
		const modal = $(this);
		const form = modal.find('form');
		let action = form.data('url-base');
		if(!action.endsWith('/')){
			action+='/'
		}
		form.attr('action', action + codigoTitulo);
		
		modal.find('.modal-body span').html('Tem certeza que deseja excluir o título <strong>' + descricaoTitulo + '</strong>?');
		
	});
	
	$('[rel="tooltip"]').tooltip();
	
	
});

