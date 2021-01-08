import React, { useState } from "react";

const NewBoxForm = () => {
	return (
		<div className="BoxList">
			<form>
				<label htmlFor="color">Color: </label>
				<input type="text" />
				<label htmlFor="width">Color: </label>
				<label htmlFor="height">Color: </label>
			</form>
		</div>
	);
};

export default NewBoxForm;
