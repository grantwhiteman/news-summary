import React, { Component } from 'react';

export default class News extends Component {
	constructor(props) {
		super(props);
		this.state = { titles: [], pictures: [] };
	}

	componentDidMount = () => {
		fetch(
			'https://content.guardianapis.com/search?page-size=10&show-fields=thumbnail&show-elements=image&api-key=424714ba-bf73-4273-b546-30d872c76311'
		)
			.then(res => res.json())
			.then(data => {
				for (let i = 0; i < data.response.results.length; i++) {
					if (data.response.results[i].fields) {
						this.setState({ titles: this.state.titles.concat(data.response.results[i].webTitle) });
						this.setState({
							pictures : this.state.pictures.concat(data.response.results[i].fields.thumbnail)
						});
					}
				}
			});
	};

	render() {
		return (
			<div>
				<h1>News Summary</h1>
				{this.state.titles.map((item, i) => (
					<div>
						<h2 key={i}>{item}</h2>
						<img style={{ height: 200 }} alt={i} src={this.state.pictures[i]} />
					</div>
				))}
			</div>
		);
	}
}
