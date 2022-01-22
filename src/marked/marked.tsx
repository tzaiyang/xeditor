import { marked } from 'marked';
import mermaidAPI from 'mermaid';
import hljs from 'highlight.js';
import { v4 as uuidv4 } from 'uuid';

export function Marked(src: string):string {
  var renderer = new marked.Renderer();
  // mermaid
  var config = {
    startOnLoad:false,
    flowchart:{
        useMaxWidth:true,
        htmlLabels:true
    }
  };
  mermaidAPI.initialize(config);
  renderer.code = function (code, language) {
    if(language == 'mermaid' &&
      (code.match(/^graph/)||
       code.match(/^flowchart/)||
       code.match(/^sequenceDiagram/)||
       code.match(/^classDiagram/)||
       code.match(/^stateDiagram/)||
       code.match(/^stateDiagram-v2/)||
       code.match(/^erDiagram/)||
       code.match(/^journey/)||
       code.match(/^gantt/)||
       code.match(/^pie/)||
       code.match(/^requirementDiagram/))){
        try {
          // Example of using the API
          var svgCodeHtml: string;
          var insertSvg = function(svgCode, bindFunctions) {
            svgCodeHtml = svgCode;
          };
          var index = uuidv4()
          mermaidAPI.render('graphDiv'+index,code,insertSvg);
          var result=svgCodeHtml.replace(/height="[0-9]+.[0-9]+"/, "height=\"100%\"")
        }catch(err) {
          console.log("Cannot render mermaid diagram " + index + "\n" + code);
          return err.message;
        }
        return result;
    }else if(language == 'drawio'){
      // to do: load drawio software to draw diagram and autosave back xml to code
    }else{
        return '<pre><code>'+code+'</code></pre>';
    }
  };

  // Set options
  // `highlight` example uses https://highlightjs.org
  marked.setOptions({
    renderer: renderer,
    highlight: function(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  return marked.parse(src)
}
