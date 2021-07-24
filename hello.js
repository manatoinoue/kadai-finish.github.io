var message = "";

    if (language == 1){
        message = "こんにちは";
    }else if (language == 2) {
        message = "Hello";
    }else if (language == 3) {
        message = "你好";
    }else if (language == 4) {
        message = "안녕하세요";
    }else {
        message = "想定されていない引数です";
    }

    alert(message);
