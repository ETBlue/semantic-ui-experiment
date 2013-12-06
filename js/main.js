$('a.item.advanced').on('click tap',function(){
  $('.filter.advanced').toggle();
})

$('.ui.sortable.table').find('.attend,.bill,.team,.statistic').hide();

$('.option').find('.info').on('click tap',function(){
  $('.ui.sortable.table').find('.info').toggle();
  $(this).toggleClass('inactive');
  $(this).children('i.icon').toggleClass('checkmark sign checkbox empty');
})

$('.option').find('.attend').on('click tap',function(){
  $('.ui.sortable.table').find('.attend').toggle();
  $(this).toggleClass('inactive');
  $(this).children('i.icon').toggleClass('checkmark sign checkbox empty');
})

$('.option').find('.bill').on('click tap',function(){
  $('.ui.sortable.table').find('.bill').toggle();
  $(this).toggleClass('inactive');
  $(this).children('i.icon').toggleClass('checkmark sign checkbox empty');
})

$('.option').find('.team').on('click tap',function(){
  $('.ui.sortable.table').find('.team').toggle();
  $(this).toggleClass('inactive');
  $(this).children('i.icon').toggleClass('checkmark sign checkbox empty');
})

$('.option').find('.statistic').on('click tap',function(){
  $('.ui.sortable.table').find('.statistic').toggle();
  $(this).toggleClass('inactive');
  $(this).children('i.icon').toggleClass('checkmark sign checkbox empty');
})

$('.ui.sortable.table').tablesort();


/*
$('.ui.checkbox')
  .checkbox()
;

$('.ui.menu')
  .pagination()
;

$('.ui.shape')
  .shape()
;

$('.ui.dropdown')
  .dropdown({'on':'hover'})
;

$('.ui.shape')
  .shape('set next side','.draft')
  .shape('flip left')
;

$('.ui.shape')
  .shape('set next side','.final')
  .shape('flip right')
;
*/