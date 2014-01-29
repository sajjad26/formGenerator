(function(window){
        window.formGenerator = function(){
            
        };

        formGenerator.prototype.generateCheckbox = function(options){
            var checkboxDiv = document.createElement('div');
            checkboxDiv.className = "checkbox";
            var checkboxLabel = document.createElement('label');
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = options.name;
            checkbox.value = options.value;
            checkboxLabel.appendChild(checkbox);
            checkboxLabel.innerHTML += options.checkboxText;
            checkboxDiv.appendChild(checkboxLabel);
            return checkboxDiv;
        };

        formGenerator.prototype.generateSelectBoxOption = function(options){
            var option = document.createElement('option');
            option.value = options.value;
            option.innerHTML = options.text;
            return option;
        };

        formGenerator.prototype.generateTextField = function(options){
            var textFieldDiv = document.createElement("div");
            textFieldDiv.className = "form-group";
            var label = document.createElement('label');
            label.htmlFor = options.id;
            label.innerHTML = options.labelText;
            var input = document.createElement('input');
            input.type = options.type;
            input.name = options.name;
            input.id = options.id;
            input.className = 'form-control';
            input.value = options.value;
            textFieldDiv.appendChild(label);
            textFieldDiv.appendChild(input);
            return textFieldDiv; 
        };

        formGenerator.prototype.generateRadioButton = function(options){
            var radioDiv = document.createElement('div');
            radioDiv.className = "radio";
            var radioLabel = document.createElement('label');
            var radio = document.createElement('input');
            radio.type = "radio";
            radio.name = options.name;
            radio.value = options.value;
            if(false !== options.checked){
                radio.checked = true;
            }
            radioLabel.appendChild(radio);
            radioLabel.innerHTML += options.radioText;
            radioDiv.appendChild(radioLabel);
            return radioDiv;
        };

    })(window);
