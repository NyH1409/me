const hashStr = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

export const toHex = (str: string) => {
  const hash = hashStr(str);
  const hex = Array.from({length: 3}, (_, i) => {
    const value = (hash >> (i * 8)) & 0xff;
    return `00${value.toString(16)}`.slice(-2);
  }).join("");
  return `#${hex}`;
};

export const toRgb = (str: string) => {
  const hash = hashStr(str);
  return Array.from({length: 3}, (_, i) => (hash >> (i * 8)) & 0xff).join(",");
};


export const htmlContent = `
<p>When encountering this error on older versions of Azure Functions, it's important to check the folder structure of your project. Ensure that your function is located in a folder that corresponds to the name of the endpoint you are trying to implement. Next, you should have an <code>__init__.py</code> file that contains all your code, as well as a <code>function.json</code> file that describes the configuration of your function.</p>
<h2>Example:</h2>
<ol>
<li>Create a folder named <code>myfunction</code> (or any other appropriate name) at the root of your Azure Functions project.</li>
<li>Inside the <code>myfunction</code> folder, create an <code>__init__.py</code> file with the following code:</li>
</ol>
<pre><code>import logging

import azure.functions as func

def main(req: func.HttpRequest) -&gt; func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    return func.HttpResponse("Hello, World!")
</code></pre>
<ol start="3">
<li>Next to <code>__init__.py</code>, create a <code>function.json</code> file with the following content:</li>
</ol>
<pre><code>{
  "scriptFile": "__init__.py",
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": [
        "get",
        "post"
      ]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "$return"
    }
  ]
}
</code></pre>
<p>In this example, <code>function.json</code> describes that our function uses an HTTP trigger and specifies that the function can be triggered by HTTP GET and POST methods. The <code>__init__.py</code> file contains the function code that simply returns "Hello, World!" in response to an HTTP request.</p>
<p>Ensure that the folder structure and files match exactly as described above to avoid deployment errors with Azure Functions.</p>
`;
