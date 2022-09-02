import { translateToMorse, translateFromMorse } from "./translator";

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

  it(`'!/"&()=+:'@'  should translate to be '-.-.-- -..-. .-..-. .-... -.--. -.--.- -...- .-.-. ---... .----. .--.-.'`, () => {
    // Arrange
    let str;
    // Act
    str = `!/"&()=+:'@`
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("-.-.-- -..-. .-..-. .-... -.--. -.--.- -...- .-.-. ---... .----. .--.-.");
  });

  it("'1' should translate to be '.----'", () => {
    // Arrange
    let str;
    // Act
    str = "1"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe(".----");
  });

  it("'2' should translate to be '..---'", () => {
    // Arrange
    let str;
    // Act
    str = "2"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("..---");
  });

  it("'3' should translate to be '...--'", () => {
    // Arrange
    let str;
    // Act
    str = "3"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("...--");
  });

  it("'4' should translate to be '....-'", () => {
    // Arrange
    let str;
    // Act
    str = "4"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("....-");
  });

  it("'5' should translate to be '.....'", () => {
    // Arrange
    let str;
    // Act
    str = "5"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe(".....");
  });

  it("'6' should translate to be '-....'", () => {
    // Arrange
    let str;
    // Act
    str = "6"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("-....");
  });

  it("'7' should translate to be '--...'", () => {
    // Arrange
    let str;
    // Act
    str = "7"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("--...");
  });

  it("'8' should translate to be '---..'", () => {
    // Arrange
    let str;
    // Act
    str = "8"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("---..");
  });

  it("'9' should translate to be '----.'", () => {
    // Arrange
    let str;
    // Act
    str = "9"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("----.");
  });

  it("'0' should translate to be '-----'", () => {
    // Arrange
    let str;
    // Act
    str = "0"
    let result = translateToMorse(str);
    // Assert
    expect(result).toBe("-----");
  });

});


xdescribe('Testing translateFromMorse', () => {
  it("'.-' should translate to be 'A'", () => {
    // Arrange
    let str;
    // Act
    str = ".-"
    let result = translateFromMorse(str);
    // Assert
    expect(result).toBe("A");
  });
})