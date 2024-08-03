import './app.css';

export function App() {
	return (
		<>
			<div data-layout-content>
				{/*
			<header>
				<h1>HTML elements reference</h1>
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
					rel="noreferrer"
					target="_blank"
					>https://developer.mozilla.org/en-US/docs/Web/HTML/Element</a
				>

			</header>
			<section id="main_root">
				<h6>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#main_root"
						rel="noreferrer"
						target="_blank"
						>Main Root</a
					>
				</h6>
			</section>
			<section id="document_metadata">
				<h6>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#document_metadata"
						rel="noreferrer"
						target="_blank"
						>Document Metadata</a
					>
				</h6>
			</section>
			<section id="sectioning_root">
				<h6>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#sectioning_root"
						rel="noreferrer"
						target="_blank"
						>Sectioning Root</a
					>
				</h6>
			</section>

			<section id="content_sectioning">
				<h6>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning"
						rel="noreferrer"
						target="_blank"
						>Content Sectioning</a
					>
				</h6>

				<div className="grid">
					<address id="address">
						123 Example St.<br />
						City, Country<br />
						12345-67890
					</address>
					<article id="article">
						<h3>Article Heading</h3>
						<h4>Subheading</h4>
						<p>Article content goes here...</p>
					</article>
					<aside id="aside">
						<p>Status bar content</p>
					</aside>
					<footer id="footer">
						<p>footer &copy; 2024</p>
					</footer>
					<header id="header">
						Header element
						<b>with HTML Elements</b>
						<p>
							This document contains a comprehensive list of HTML elements and their specific
							attributes for testing browser styles.
						</p>
					</header>
					<div>
						<h1 id="h1">h1</h1>
						<h2 id="h2">h2</h2>
						<h3 id="h3">h3</h3>
						<h4 id="h4">h4</h4>
						<h5 id="h5">h5</h5>
						<h6 id="h6">h6</h6>
					</div>
					<hgroup id="hgroup">
						<span>HGroup Heading</span>
						<h4>Subheading</h4>
					</hgroup>
					<nav id="nav">
						Nav Bar =>
						<a href="#main" target="_self">Go to Main</a>
						<a href="#section" target="_self">Go to Section</a>
					</nav>
					<main id="main">
						<h2>Main</h2>
						<p>Represents main in a document.</p>
					</main>
					<section id="section">
						<h2>Section</h2>
						<p>Represents a section in a document.</p>
					</section>
				</div>
			</section>
			<section id="text_content">
				<blockquote id="blockquote" cite="https://example.com">
					<p>Example blockquote</p>
				</blockquote>
				<dl id="dl">
					<dt id="dt">Definition Term</dt>
					<dd id="dd">Definition Description</dd>
				</dl>
				<div id="div">
					<hr id="hr" />
					<p id="p">Paragraph text</p>
					<pre id="pre">
            <code>
                function example() {
                    return 'This is a code block';
                }
            </code>
        </pre>
				</div>
				<ol id="ol">
					<li>Ordered item 1</li>
					<li>Ordered item 2</li>
				</ol>
				<ul id="ul">
					<li>Unordered item 1</li>
					<li>Unordered item 2</li>
				</ul>
			</section>
			<section id="inline_text_semantics" className="grid">
				<abbr id="abbr" title="Abbreviation">abbr</abbr>
				<b id="b">Bold text</b>
				<bdi id="bdi">Bidirectional Isolation</bdi><br />
				<bdo id="bdo">This text will be displayed right->to->left.</bdo>
				<cite id="cite">Citation Text</cite>
				<code id="code">console.log('Hello, World!');</code>
				<data id="data" defaultValue="123456">Product 123456</data>
				<dfn id="dfn">Definition Term</dfn>
				<em id="em">Emphasized text</em>
				<i id="i">Italic text</i>
				<kbd id="kbd">Keyboard input</kbd>
				<mark id="mark">Highlighted text</mark>
				<q id="q" cite="https://example.com">Example quote</q>
				<s id="s">Strikethrough text</s>
				<samp id="samp">Sample output from a computer program</samp>
				<small id="small">Small text</small>
				<span id="span">Inline text</span>
				<strong id="strong">Strong text</strong>
				<sub id="sub">Subscript text</sub>
				<sup id="sup">Superscript text</sup>
				<time id="time" datetime="2024-07-09">July 9, 2024</time>
				<u id="u">Underlined text</u>
				<var id="var">Variable</var>
			</section>
			<section id="image_and_multimedia">
				<figure id="figure">
					<img src="image.jpg" alt="Example Image" width="300" height="200" />
					<figcaption id="figcaption">Figure Caption</figcaption>
				</figure>
				<img id="img" src="image2.jpg" alt="Example Image" width="300" height="200" />
				<picture id="picture">
					<source id="source" srcset="image.webp" type="image/webp" />
					<img src="image.jpg" alt="Example Image" />
				</picture>
				<video id="video" controls width="300">
					<source src="movie.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<audio id="audio" controls>
					<source src="audio.mp3" type="audio/mp3" />
					Your browser does not support the audio element.
				</audio>
			</section>
			<section id="embedded_content" className="grid">
				<embed id="embed" src="movie.swf" width="400" height="300" />
				<iframe id="iframe" src="https://example.com" width="300" height="200">
					Your browser does not support iframes.
				</iframe>
				<object id="object" data="movie.mp4" type="video/mp4" width="400" height="300">
					<param id="param" name="autoplay" defaultValue="true" />
				</object>
			</section>
			<section id="svg_and_mathml" className="grid">
				<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
					<circle cx="50" cy="50" r="40" />
					<circle cx="150" cy="50" r="4" />
					<circle cx="5" cy="5" r="4" />
				</svg>
				<p>
					The infinite sum
					<math display="block">
						<mrow>
							<munderover>
								<mo>∑</mo>
								<mrow>
									<mi>n</mi>
									<mo>=</mo>
									<mn>1</mn>
								</mrow>
								<mrow>
									<mo>+</mo>
									<mn>∞</mn>
								</mrow>
							</munderover>
							<mfrac>
								<mn>1</mn>
								<msup>
									<mi>n</mi>
									<mn>2</mn>
								</msup>
							</mfrac>
						</mrow>
					</math>
					is equal to the real number
					<math display="inline">
						<mfrac>
							<msup>
								<mi>π</mi>
								<mn>2</mn>
							</msup>
							<mn>6</mn>
						</mfrac>
					</math>
				</p>
			</section>
			<section id="scripting">
				<canvas id="canvas" width="200" height="100"
					>Your browser does not support the canvas element.</canvas
				>
				<noscript id="noscript">Your browser does not support JavaScript!</noscript>
				<script id="script">
					console.log('Script executed');
				</script>
			</section>
			<section id="demarcating_edits">
				<del id="del">Deleted text</del>
				<ins id="ins">Inserted text</ins>
			</section>
			<section id="table_content">
				<table id="table">
					<caption id="caption">
						Example Table
					</caption>
					<colgroup id="colgroup">
						<col id="col" />
						<col />
					</colgroup>
					<thead id="thead">
						<tr id="tr">
							<th id="th">Header 1</th>
							<th>Header 2</th>
						</tr>
					</thead>
					<tbody id="tbody">
						<tr>
							<td id="td">Row 1, Cell 1</td>
							<td>Row 1, Cell 2</td>
						</tr>
					</tbody>
					<tfoot id="tfoot">
						<tr>
							<td>Footer Cell 1</td>
							<td>Footer Cell 2</td>
						</tr>
					</tfoot>
				</table>
			</section>
			*/}
				<section id="forms">
					<h4>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms"
							rel="noreferrer"
							target="_blank"
						>
							Forms
						</a>
					</h4>

					<fieldset>
						<legend>Radio</legend>
						<fieldset>
							<legend>Default</legend>
							<label data-radio htmlFor="default_0">
								<input id="default_0" type="radio" name="default" defaultValue="0" />
								<span>zero</span>
							</label>
							<label data-radio htmlFor="default_1">
								<input id="default_1" type="radio" name="default" defaultValue="1" defaultChecked />
								<span>one</span>
							</label>
						</fieldset>
						<fieldset>
							<legend>Indeterminate</legend>
							<label data-radio htmlFor="radio_name_0">
								<input id="radio_name_0" type="radio" name="indeterminate" defaultValue="0" />
								<span>zero</span>
							</label>
							<label data-radio htmlFor="radio_name_1">
								<input id="radio_name_1" type="radio" name="indeterminate" defaultValue="1" />
								<span>one</span>
							</label>
						</fieldset>
					</fieldset>

					<fieldset>
						<legend>Checkbox</legend>
						<fieldset>
							<legend>Default</legend>
							<label data-radio htmlFor="checkbox_name_0">
								<input id="checkbox_name_0" type="checkbox" name="checkbox_0" defaultValue="0" />
								<label htmlFor="checkbox_name_0">zero</label>
							</label>
							<label data-radio htmlFor="checkbox_name_1">
								<input
									id="checkbox_name_1"
									type="checkbox"
									name="checkbox_1"
									defaultValue="1"
									defaultChecked
								/>
								<label htmlFor="checkbox_name_1">one</label>
							</label>
						</fieldset>
						<fieldset>
							<legend>Switch</legend>
							<label data-radio htmlFor="checkbox_name_0">
								<input id="switch_0" type="checkbox" name="switch_0" defaultValue="0" />
								<label htmlFor="switch_0">zero</label>
							</label>
							<label data-radio htmlFor="checkbox_name_1">
								<input
									id="switch_1"
									type="checkbox"
									name="switch_1"
									defaultValue="1"
									defaultChecked
								/>
								<label htmlFor="switch_1">one</label>
							</label>
							<label data-radio htmlFor="checkbox_name_1">
								<input id="switch_2" type="checkbox" name="switch_2" defaultValue="1" />
								<label htmlFor="switch_2">one</label>
							</label>
						</fieldset>
					</fieldset>
					<hr />
					<fieldset>
						<legend>Button</legend>
						<input
							id="button_name_1"
							type="button"
							name="button_name"
							defaultValue="Button Input"
						/>
						<input type="reset" defaultValue="Reset Input" />
						<input type="color" name="color" />
						<button id="button_name_2" type="button">
							Button element
						</button>
						<input type="submit" defaultValue="Submit Input" />

						<input type="range" id="range_input" />
						<input type="range" min="0" max="100" defaultValue="40" step="5" />
						<input type="range" disabled defaultValue="80" />
						<input type="range" name="range" />
						<input
							type="image"
							src="data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH hhx4dbgYKAAA7"
							alt="submit"
						/>
						<select id="select" name="select">
							<option defaultValue="1">Option 1</option>
							<option defaultValue="2">Option 2</option>
						</select>
						<input type="file" name="file" />
					</fieldset>

					<form id="form" action="/submit" method="post" encType="multipart/form-data">
						<fieldset>
							<legend>Text</legend>
							<div className="grid">
								<input type="email" name="email" placeholder="email" autoComplete="username" />
								<input type="number" name="number" placeholder="number" />
								<input
									type="password"
									name="password"
									placeholder="password"
									autoComplete="current-password"
								/>
								<input type="search" name="search" placeholder="search" />
								<input type="tel" name="tel" placeholder="tel" />
								<input type="text" name="text" placeholder="text" />
								<input type="url" name="url" placeholder="url" />
								<input type="date" name="date" />
								<input type="datetime-local" name="datetime-local" />
								<input type="month" name="month" />
								<input type="time" name="time" />
								<input type="week" name="week" />
							</div>
							<hr />
							<textarea id="textarea" rows="4" cols="50" defaultValue="Sample text"></textarea>
							<hr />
							<progress></progress>
							<input type="hidden" name="hidden" />
						</fieldset>
					</form>
				</section>

				<section id="interactive_elements">
					<details id="details">
						<summary id="summary">More Info</summary>
						<p>Additional details about HTML elements.</p>
					</details>
					<details open>
						<summary>More Info</summary>
						<p>Additional details about HTML elements.</p>
					</details>
					<button popovertarget="my-popover">Open Popover</button>
					<dialog popover="true" id="my-popover">
						Greetings, one and all!
						<button popovertarget="my-popover" popovertargetaction="hide">
							close
						</button>
					</dialog>
					<input type="radio" name="group" placeholder="???" />
					<input type="text" name="text-1" placeholder="???" />
					<input type="radio" name="group" placeholder="???" />
					<input type="text" name="text-2" placeholder="???" />
					<input type="radio" name="group" placeholder="???" />
					<input type="text" name="text-3" placeholder="???" />
					<input type="checkbox" />
					<input
						list="ice-cream-flavors"
						id="ice-cream-choice"
						name="ice-cream-choice"
						placeholder="Choose flavor"
					/>
					<datalist id="ice-cream-flavors">
						<option defaultValue="Chocolate"></option>
						<option defaultValue="Coconut"></option>
						<option defaultValue="Mint"></option>
						<option defaultValue="Strawberry"></option>
						<option defaultValue="Vanilla"></option>
					</datalist>
				</section>
			</div>
			<nav data-menu>
				{/* <a href="#main_root" target="_self">Main root</a>
			<a href="#document_metadata" target="_self">Document metadata</a>
			<a href="#sectioning_root" target="_self">Sectioning root</a>
			<a href="#content_sectioning" target="_self">Content sectioning</a>
			<a href="#text-content" target="_self">Text content</a>
			<a href="#inline_text_semantics" target="_self">Inline text semantics</a>
			<a href="#image_and_multimedia" target="_self">Image and multimedia</a>
			<a href="#svg_and_mathml" target="_self">SVG_and_MathML</a>
			<a href="#scripting" target="_self">Scripting</a>
			<a href="#demarcating_edits" target="_self">Demarcating edits</a>
			<a href="#table_content" target="_self">Table content</a>
			<a href="#forms" target="_self">Forms</a>
			<a href="#interactive_elements" target="_self">Interactive elements</a>
			<a href="#web_components" target="_self">Web components</a>
			<a href="#obsolete_and_deprecated_elements" target="_self">
				Obsolete and deprecated elements
			</a>  */}
			</nav>
			<div data-status-bar>Status bar content</div>
		</>
	);
}
