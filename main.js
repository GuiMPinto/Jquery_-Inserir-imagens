$(document).ready(function()
{
    $('header button').click(function()
    {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })   

    $('form').on('submit',function(e)
    {
        e.preventDefault()
        let endNovaImagem = $('#inserir-NovaImagem').val()
        let novoItem = $('<li></li>')
        $(`<img src="${endNovaImagem}">`).appendTo(novoItem)
        $(`
            <div class="over-lay-imagen-link">
                <a href="${endNovaImagem}" target="_blank">
                Ver imagem no tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000) // 1000 ms   1 seg
        $('#inserir-NovaImagem').val('')
    })
})