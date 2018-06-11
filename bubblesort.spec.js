describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element',function(){
    expect ( bubbleSort([14])).toEqual( [14] );
  });

  it('handles an ordered array',function(){
    expect ( bubbleSort([1, 2, 3])).toEqual( [1, 2, 3] );
  });

  it('handles a non-ordered array',function(){
    expect ( bubbleSort([6, 5, 4, 3, 2, 1])).toEqual( [1, 2, 3, 4, 5, 6] );
    expect ( bubbleSort([4, 5, 6, 1, 2, 3])).toEqual( [1, 2, 3, 4, 5, 6] );
  });

  it('handles a non-ordered array with duplicated numbers',function(){
    expect ( bubbleSort([6, 5, 4, 4, 3, 2, 1])).toEqual( [1, 2, 3, 4, 4, 5, 6] );
    expect ( bubbleSort([4, 5, 6, 1, 2, 4, 3])).toEqual( [1, 2, 3, 4, 4, 5, 6] );
  });

  it('handles an array mixing numbers and letters',function(){
    expect ( bubbleSort([6, 5, 'Patrick', 4, 'Fila', 2, 1])).toEqual( [1, 2, 4, 5, 6, 'Fila', 'Patrick'] );
  });
});
