describe('Tests', () => {
  it('should be running correctly', () => {
    expect(true).toBe(true)
  })

  test('use happy-dom in this test file', () => {
    const element = document.createElement('div')
    expect(element).not.toBeNull()
  })
})
