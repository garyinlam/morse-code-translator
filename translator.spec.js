import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
  it("'a' should translate to be .-", () => {
    // Arrange
    let str;
    // Act
    str = "a"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe(".-");
  });
});