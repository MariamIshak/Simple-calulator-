		function addValue(value) {
			document.getElementById('result').value += value;
		}

		function calculate() {
			try {
				document.getElementById('result').value = eval(document.getElementById('result').value);
			} catch (e) {
				alert('Invalid Expression');
			}
		}

		function clearResult() {
			document.getElementById('result').value = '';
		}
