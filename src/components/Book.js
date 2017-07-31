import React from 'react';

const Book = (props) => (
	<div className="row">
		<section className="col-xs-12 place-item">
			<div className="col-xs-12 col-sm-6 col-lg-6">
				<h3>{props.item.name}</h3>
			</div>
		</section>
	</div>
);

export default Book;
