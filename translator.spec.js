import { translateToMorse } from "./translator";

//klmnopqrstuvwxyz

describe('Testing translateToMorse', () => {
  it("'a' should translate to be '.-'", () => {
    // Arrange
    let str;
    // Act
    str = "a"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe(".-");
  });

  it("'bcd' should translate to be '-... -.-. -..'", () => {
    // Arrange
    let str;
    // Act
    str = "bcd"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("-... -.-. -..");
  });

  it("'e fg hi' should translate to be '. / ..-. --. / .... ..'", () => {
    // Arrange
    let str;
    // Act
    str = "e fg hi"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe(". / ..-. --. / .... ..");
  });

  it("'J' and 'j' should both translate to be '.---'", () => {
    // Arrange
    let str;
    let strCap;
    // Act
    str = "j"
    strCap = str.toUpperCase();
    let result = translateToMorse(str);
    let resultCapital = translateToMorse(strCap);
    // Assert
    expect(result).toBe(".---");
    expect(resultCapital).toBe(".---");
  });

  it("'klmnopqrstuvwxyz' should translate to be '-.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'", () => {
    // Arrange
    let str;
    // Act
    str = "klmnopqrstuvwxyz"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("-.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..");
  });

  it("'.' should translate to be '.-.-.-'", () => {
    // Arrange
    let str;
    // Act
    str = "."
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe(".-.-.-");
  });

  it("',' should translate to be '--..--'", () => {
    // Arrange
    let str;
    // Act
    str = ","
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe(".-.-.-");
  });

  it("'?' should translate to be '..--..'", () => {
    // Arrange
    let str;
    // Act
    str = "?"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("..--..");
  });

  it("'-' should translate to be '-....-'", () => {
    // Arrange
    let str;
    // Act
    str = "-"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("-....-");
  });
});