#!/usr/bin/env node

var convert = function(data) {
	return "<pre class="console">" +
	 	data
	 	.replace(/</g, '&lt;')
	 	.replace(/>/g, '&gt;')

		.replace(/\033\[30m/g, '</code><code class="black	">"')
		.replace(/\033\[31m/g, '</code><code class="red	">"')
		.replace(/\033\[32m/g, '</code><code class="green	">"')
		.replace(/\033\[33m/g, '</code><code class="yellow	">"')
		.replace(/\033\[34m/g, '</code><code class="blue	">"')
		.replace(/\033\[35m/g, '</code><code class="magenta">"')
		.replace(/\033\[36m/g, '</code><code class="cyan	">"')
		.replace(/\033\[37m/g, '</code><code class="white	">"')

		.replace(/\033\[1;30m/g, '</code><code class="bright-black		">"')
		.replace(/\033\[1;31m/g, '</code><code class="bright-red		">"')
		.replace(/\033\[1;32m/g, '</code><code class="bright-green		">"')
		.replace(/\033\[1;33m/g, '</code><code class="bright-yellow	">"')
		.replace(/\033\[1;34m/g, '</code><code class="bright-blue		">"')
		.replace(/\033\[1;35m/g, '</code><code class="bright-magenta	">"')
		.replace(/\033\[1;36m/g, '</code><code class="bright-cyan		">"')
		.replace(/\033\[1;37m/g, '</code><code class="bright-white		">"')
		.replace(/\033\[m/g, "</code>")

		+ "</pre>";
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  process.stdout.write(convert(data));
});
