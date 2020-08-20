$('.btn-cast').click(function() {
    var i = $(this).attr('id').substring(14)
    showModal(i)
})


function showModal(i) {
    var candidate_div = $("#candidate-div-" + i)
    name = candidate_div.children('.name').html()
    party = candidate_div.children('.party').html()
    candidate_id = candidate_div.children('.candidate-id').html()
    imgSrc = candidate_div.children('.img').attr('src')
    var modal = $("#modal")
    $('#modal-name').html(name)
    $('#modal-party').html(party)
    $('#modal-candidate-id').html(candidate_id)
    $('modal-img').attr('src', imgSrc)
    modal.modal()
}