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

  it('compares the expected number of times', function(){
    spyOn(window, 'compare').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(compare.calls.count()).toEqual(10);
  });
  it('swaps the expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });

});
