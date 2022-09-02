"use strict";

var _translator = require("./translator");

describe('Testing translateToMorse', function () {
  it("'a' should translate to be '.-'", function () {
    // Arrange
    var str; // Act

    str = "a";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe(".-");
  });
  it("'bcd' should translate to be '-... -.-. -..'", function () {
    // Arrange
    var str; // Act

    str = "bcd";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("-... -.-. -..");
  });
  it("'e fg hi' should translate to be '. / ..-. --. / .... ..'", function () {
    // Arrange
    var str; // Act

    str = "e fg hi";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe(". / ..-. --. / .... ..");
  });
  it("'J' and 'j' should both translate to be '.---'", function () {
    // Arrange
    var str;
    var strCap; // Act

    str = "j";
    strCap = str.toUpperCase();
    var result = (0, _translator.translateToMorse)(str);
    var resultCapital = (0, _translator.translateToMorse)(strCap); // Assert

    expect(result).toBe(".---");
    expect(resultCapital).toBe(".---");
  });
  it("'klmnopqrstuvwxyz' should translate to be '-.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'", function () {
    // Arrange
    var str; // Act

    str = "klmnopqrstuvwxyz";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("-.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..");
  });
  it("'.' should translate to be '.-.-.-'", function () {
    // Arrange
    var str; // Act

    str = ".";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe(".-.-.-");
  });
  it("',' should translate to be '--..--'", function () {
    // Arrange
    var str; // Act

    str = ",";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("--..--");
  });
  it("'?' should translate to be '..--..'", function () {
    // Arrange
    var str; // Act

    str = "?";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("..--..");
  });
  it("'-' should translate to be '-....-'", function () {
    // Arrange
    var str; // Act

    str = "-";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("-....-");
  });
  it("'!/\"&()=+:'@'  should translate to be '-.-.-- -..-. .-..-. .-... -.--. -.--.- -...- .-.-. ---... .----. .--.-.'", function () {
    // Arrange
    var str; // Act

    str = "!/\"&()=+:'@";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("-.-.-- -..-. .-..-. .-... -.--. -.--.- -...- .-.-. ---... .----. .--.-.");
  });
  it("'1' should translate to be '.----'", function () {
    // Arrange
    var str; // Act

    str = "1";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe(".----");
  });
  it("'2' should translate to be '..---'", function () {
    // Arrange
    var str; // Act

    str = "2";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("..---");
  });
  it("'3' should translate to be '...--'", function () {
    // Arrange
    var str; // Act

    str = "3";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("...--");
  });
  it("'4' should translate to be '....-'", function () {
    // Arrange
    var str; // Act

    str = "4";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("....-");
  });
  it("'5' should translate to be '.....'", function () {
    // Arrange
    var str; // Act

    str = "5";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe(".....");
  });
  it("'6' should translate to be '-....'", function () {
    // Arrange
    var str; // Act

    str = "6";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("-....");
  });
  it("'7' should translate to be '--...'", function () {
    // Arrange
    var str; // Act

    str = "7";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("--...");
  });
  it("'8' should translate to be '---..'", function () {
    // Arrange
    var str; // Act

    str = "8";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("---..");
  });
  it("'9' should translate to be '----.'", function () {
    // Arrange
    var str; // Act

    str = "9";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("----.");
  });
  it("'0' should translate to be '-----'", function () {
    // Arrange
    var str; // Act

    str = "0";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("-----");
  });
  it("'#' should fail to translate", function () {
    // Arrange
    var str; // Act

    str = "#";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("Cannot translate # to morse");
  });
  it("'#b <3' should fail to translate", function () {
    // Arrange
    var str; // Act

    str = "#b <3";
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe("Cannot translate #, < to morse");
  });
});
describe('Testing translateFromMorse', function () {
  it("'.-' should translate to be 'A'", function () {
    // Arrange
    var str; // Act

    str = ".-";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("A");
  });
  it("'-... -.-. -..' should translate to be 'BCD'", function () {
    // Arrange
    var str; // Act

    str = "-... -.-. -..";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("BCD");
  });
  it("'. / ..-. --. / .... ..' should translate to be 'E FG HI'", function () {
    // Arrange
    var str; // Act

    str = ". / ..-. --. / .... ..";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("E FG HI");
  });
  it("'.--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..' should translate to be 'JKLMNOPQRSTUVWXYZ'", function () {
    // Arrange
    var str; // Act

    str = ".--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("JKLMNOPQRSTUVWXYZ");
  });
  it("'.-.-.-' should translate to be '.'", function () {
    // Arrange
    var str; // Act

    str = ".-.-.-";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe(".");
  });
  it("'--..--' should translate to be ','", function () {
    // Arrange
    var str; // Act

    str = "--..--";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe(",");
  });
  it("'..--..' should translate to be '?'", function () {
    // Arrange
    var str; // Act

    str = "..--..";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("?");
  });
  it("'-....-' should translate to be '-'", function () {
    // Arrange
    var str; // Act

    str = "-....-";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("-");
  });
  it("'-.-.-- -..-. .-..-. .-... -.--. -.--.- -...- .-.-. ---... .----. .--.-.'  should translate to be '!/\"&()=+:'@'", function () {
    // Arrange
    var str; // Act

    str = '-.-.-- -..-. .-..-. .-... -.--. -.--.- -...- .-.-. ---... .----. .--.-.';
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("!/\"&()=+:'@");
  });
  it("'.----' should translate to be '1'", function () {
    // Arrange
    var str; // Act

    str = ".----";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("1");
  });
  it("'..---' should translate to be '2'", function () {
    // Arrange
    var str; // Act

    str = "..---";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("2");
  });
  it("'...--' should translate to be '3'", function () {
    // Arrange
    var str; // Act

    str = "...--";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("3");
  });
  it("'....-' should translate to be '4'", function () {
    // Arrange
    var str; // Act

    str = "....-";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("4");
  });
  it("'.....' should translate to be '5'", function () {
    // Arrange
    var str; // Act

    str = ".....";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("5");
  });
  it("'-....' should translate to be '6'", function () {
    // Arrange
    var str; // Act

    str = "-....";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("6");
  });
  it("'--...' should translate to be '7'", function () {
    // Arrange
    var str; // Act

    str = "--...";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("7");
  });
  it("'---..' should translate to be '8'", function () {
    // Arrange
    var str; // Act

    str = "---..";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("8");
  });
  it("'----.' should translate to be '9'", function () {
    // Arrange
    var str; // Act

    str = "----.";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("9");
  });
  it("'-----' should translate to be '0'", function () {
    // Arrange
    var str; // Act

    str = "-----";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("0");
  });
  it("'......' should fail to translate", function () {
    // Arrange
    var str; // Act

    str = "......";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("Cannot translate ......");
  });
  it("'...... . ------' should fail to translate", function () {
    // Arrange
    var str; // Act

    str = "...... . ------";
    var result = (0, _translator.translateFromMorse)(str); // Assert

    expect(result).toBe("Cannot translate ......, ------");
  });
});