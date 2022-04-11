

function RadioButtonsForm() {
	return <form action="#" className="radio-btn">
		<p>
		<label>
			<input name="group1" type="radio" checked />
			<span>All</span>
		</label>
		</p>
		<p>
		<label>
			<input name="group1" type="radio" />
			<span>Movies only</span>
		</label>
		</p>
		<p>
		<label>
			<input name="group1" type="radio" disabled="disabled" />
			<span>Series only</span>
		</label>
		</p>
	</form>
}

export {RadioButtonsForm}