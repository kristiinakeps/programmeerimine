import {Component} from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {

  webBasicCode = 'from flask import Flask\n' +
    '\n' +
    'rakendus = Flask(__name__)\n' +
    '\n' +
    '@rakendus.route("/")\n' +
    'def avaleht():\n' +
    '    return \'Tere! Veebirakendus töötab.\'';
  webOutput = ' # Running the app with options chosen by Thonny. See Help for details.\n' +
    '\'FLASK_ENV\' is deprecated and will not be used in Flask 2.3. Use \'FLASK_DEBUG\' instead.\n' +
    '\'FLASK_ENV\' is deprecated and will not be used in Flask 2.3. Use \'FLASK_DEBUG\' instead.\n' +
    ' * Serving Flask app \'veebirakendus\'\n' +
    ' * Debug mode: off\n' +
    'WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.\n' +
    ' * Running on http://127.0.0.1:5000\n' +
    'Press CTRL+C to quit';
  simpleHtmlCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h1>Tere tulemast kodutööde haldurisse!</h1>\n' +
    '    </body>\n' +
    '</html>';
  webWithHtmlCode = 'from flask import Flask, render_template\n' +
    '\n' +
    'rakendus = Flask(__name__)\n' +
    '\n' +
    '@rakendus.route("/")\n' +
    'def avaleht():\n' +
    '    return render_template("avaleht.html")\n';
  requestLog = '127.0.0.1 - - [28/Jan/2023 17:05:50] "GET / HTTP/1.1" 200 -';
  htmlWithTasksLoopCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h1>Tere tulemast kodutööde haldurisse!</h1>\n' +
    '        <h3>Siin on sinu ootel kodutööd:</h3>\n' +
    '        {% for kodutöö in kodutööd %}\n' +
    '            <div>\n' +
    '                <span>{{ kodutöö }}</span>\n' +
    '            </div>\n' +
    '        {% endfor %}\n' +
    '    </body>\n' +
    '</html>';
  htmlWithConditionCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h1>Tere tulemast kodutööde haldurisse!</h1>\n' +
    '        {% if kodutööd | length > 0 %}\n' +
    '            <h3>Siin on sinu ootel kodutööd:</h3>\n' +
    '        {% else %}\n' +
    '            <h3>Ootel kodutöid ei ole</h3>\n' +
    '        {% endif %}\n' +
    '        {% for kodutöö in kodutööd %}\n' +
    '            <div>\n' +
    '                <span>{{ kodutöö }}</span>\n' +
    '            </div>\n' +
    '        {% endfor %}\n' +
    '    </body>\n' +
    '</html>';
  mainAppWithTasksCode = 'from flask import Flask, render_template\n' +
    '\n' +
    'rakendus = Flask(__name__)\n' +
    '\n' +
    'ootel_kodutööd = ["Matemaatika õpik lk 45, ülesanded 1-5", "Eesti keele töövihik lk 19, harjutus 8",\n' +
    '            "Ajaloo essee Jüriöö ülestõusu kohta"]\n' +
    '\n' +
    '@rakendus.route("/")\n' +
    'def avaleht():\n' +
    '    return render_template("avaleht.html", kodutööd = ootel_kodutööd)';
  addingNewPageHtmlCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h3>Sisesta uus kodutöö:</h3>\n' +
    '        <form method="post">\n' +
    '            <input type="text" id="kodutöö" name="kodutöö"></input>\n' +
    '            <button type="submit">Lisa</button>\n' +
    '        </form> \n' +
    '    </body>\n' +
    '</html>';
  addingNewPageCode = '@rakendus.route("/lisamine")\n' +
    'def lisamine():\n' +
    '    return render_template("lisamine.html")';
  addingNewPostCode = '@rakendus.route("/lisamine", methods=(\'GET\', \'POST\'))\n' +
    'def lisamine():\n' +
    '    if request.method == "POST":\n' +
    '        kodutöö = request.form["kodutöö"]\n' +
    '        ootel_kodutööd.append(kodutöö)\n' +
    '        return redirect(url_for("avaleht"))\n' +
    '    return render_template("lisamine.html")';
  homePageWithAddNewCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h1>Tere tulemast kodutööde haldurisse!</h1>\n' +
    '        {% if kodutööd | length > 0 %}\n' +
    '            <h3>Siin on sinu ootel kodutööd:</h3>\n' +
    '        {% else %}\n' +
    '            <h3>Ootel kodutöid ei ole</h3>\n' +
    '        {% endif %}\n' +
    '        {% for kodutöö in kodutööd %}\n' +
    '            <div>\n' +
    '                <span>{{ kodutöö }}</span>\n' +
    '            </div>\n' +
    '        {% endfor %}\n' +
    '        <div>\n' +
    '                <a href="{{ url_for(\'lisamine\') }}">Lisa uus kodutöö</a>\n' +
    '        </div>\n' +
    '    </body>\n' +
    '</html>';
  addPageWithBackCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h3>Sisesta uus kodutöö:</h3>\n' +
    '        <form method="post">\n' +
    '            <input type="text" id="kodutöö" name="kodutöö"></input>\n' +
    '            <button type="submit">Lisa</button>\n' +
    '        </form> \n' +
    '        <div>\n' +
    '            <a href="{{ url_for(\'avaleht\') }}">Tagasi avalehele</a>\n' +
    '        </div>\n' +
    '    </body>\n' +
    '</html>';
  homePageWithDeleteCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h1>Tere tulemast kodutööde haldurisse!</h1>\n' +
    '        {% if kodutööd | length > 0 %}\n' +
    '            <h3>Siin on sinu ootel kodutööd:</h3>\n' +
    '        {% else %}\n' +
    '            <h3>Ootel kodutöid ei ole</h3>\n' +
    '        {% endif %}\n' +
    '        {% for kodutöö in kodutööd %}\n' +
    '            <div>\n' +
    '                <span>{{ kodutöö }}</span>\n' +
    '                <form method="post">\n' +
    '                    <input type="hidden" id="kodutöö" name="kodutöö" value="{{ kodutöö }}"></input>\n' +
    '                    <button type="submit">Eemalda</button>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        {% endfor %}\n' +
    '        <div>\n' +
    '                <a href="{{ url_for(\'lisamine\') }}">Lisa uus kodutöö</a>\n' +
    '        </div>\n' +
    '    </body>\n' +
    '</html>';
  applicationWithDeleteCode = '@rakendus.route("/", methods=(\'GET\', \'POST\'))\n' +
    'def avaleht():\n' +
    '    if request.method == "POST":\n' +
    '        kodutöö = request.form["kodutöö"]\n' +
    '        ootel_kodutööd.remove(kodutöö)\n' +
    '    return render_template("avaleht.html", kodutööd = ootel_kodutööd)';
  cssStyleExample = '<h1 style="color: #0f436e">Tere tulemast kodutööde haldurisse!</h1>';
  cssContents = 'html {\n' +
    '    background-color: #bedaf2;\n' +
    '    padding: 50px;\n' +
    '}\n' +
    '\n' +
    '/* Siin muudetakse kogu rakenduse h1-elementide stiili */\n' +
    'h1 {\n' +
    '    border: 5px #eeeeee solid;\n' +
    '    border-radius: 20px;\n' +
    '    color: #0f436e;\n' +
    '    background-color: #ebebeb;\n' +
    '    text-align: center;\n' +
    '    padding: 10px;\n' +
    '}\n' +
    '\n' +
    '/* Rakenduse h3-elementide stiil */\n' +
    'h3 {\n' +
    '    color: #0f436e;\n' +
    '    font-size: 26px;\n' +
    '    padding-top: 30px;\n' +
    '}\n' +
    '\n' +
    '/* Kõik button-elemendid saavad uue stiili */\n' +
    'button {\n' +
    '    border: none;\n' +
    '    border-radius: 10px;\n' +
    '    color: #ffffff;\n' +
    '    background-color: #0f436e;\n' +
    '    text-align: center;\n' +
    '    padding: 10px 20px;\n' +
    '}\n' +
    '\n' +
    '/* Lingid */\n' +
    'a {\n' +
    '    color: #0f436e;\n' +
    '    font-size: 20px;\n' +
    '}\n' +
    '\n' +
    '/* Sisendiväli */\n' +
    'input {\n' +
    '    width: 70%;\n' +
    '    margin-right: 20px;\n' +
    '    padding: 10px;\n' +
    '    border: 2px #eeeeee solid;\n' +
    '    border-radius: 15px;\n' +
    '}\n' +
    '\n' +
    '/* Sisendiväli kirjutamise ajal */\n' +
    'input:focus-visible {\n' +
    '    outline: 2px #689dc8 solid;\n' +
    '}\n' +
    '\n' +
    '/* See on meie loodud uus klass, selle tunneb ära alguses oleva punkti järgi */\n' +
    '.kodutöö-rida {\n' +
    '    margin-top: 20px;\n' +
    '    border: 2px #eeeeee solid;\n' +
    '    padding: 10px;\n' +
    '    border-radius: 20px;\n' +
    '    background-color: #689dc8;\n' +
    '    color: #ffffff;\n' +
    '    justify-content: space-between;\n' +
    '    display: flex;\n' +
    '}\n' +
    '\n' +
    '.kodutöö-kirjeldus {\n' +
    '    display: inline-block;\n' +
    '    padding-left: 20px;\n' +
    '    font-size: 20px;\n' +
    '    margin-top: auto;\n' +
    '    margin-bottom: auto;\n' +
    '}\n' +
    '\n' +
    '.kodutöö-kustutamine {\n' +
    '    display: inline-block;\n' +
    '    padding-left: 10px;\n' +
    '}\n' +
    '\n' +
    '.link {\n' +
    '    padding-top: 50px;\n' +
    '}\n';
  homepageWithStyleCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '        <link rel="stylesheet" href="{{ url_for(\'static\', filename= \'kujundus.css\') }}">\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h1>Tere tulemast kodutööde haldurisse!</h1>\n' +
    '        {% if kodutööd | length > 0 %}\n' +
    '            <h3>Siin on sinu ootel kodutööd:</h3>\n' +
    '        {% else %}\n' +
    '            <h3>Ootel kodutöid ei ole</h3>\n' +
    '        {% endif %}\n' +
    '        {% for kodutöö in kodutööd %}\n' +
    '            <div class="kodutöö-rida">\n' +
    '                <span class="kodutöö-kirjeldus">{{ kodutöö }}</span>\n' +
    '                <form method="post" class="kodutöö-kustutamine">\n' +
    '                    <input type="hidden" id="kodutöö" name="kodutöö" value="{{ kodutöö }}"></input>\n' +
    '                    <button type="submit">Eemalda</button>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        {% endfor %}\n' +
    '        <div class="link">\n' +
    '                <a href="{{ url_for(\'lisamine\') }}">Lisa uus kodutöö</a>\n' +
    '        </div>\n' +
    '    </body>\n' +
    '</html>';
  addingPageWithStyleCode = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '    <head>\n' +
    '        <meta charset="UTF-8">\n' +
    '        <title>Kodutööd</title>\n' +
    '        <link rel="stylesheet" href="{{ url_for(\'static\', filename= \'kujundus.css\') }}">\n' +
    '    </head>\n' +
    '    <body>\n' +
    '        <h3>Sisesta uus kodutöö:</h3>\n' +
    '        <form method="post">\n' +
    '            <input type="text" id="kodutöö" name="kodutöö"></input>\n' +
    '            <button type="submit">Lisa</button>\n' +
    '        </form> \n' +
    '        <div class="link">\n' +
    '            <a href="{{ url_for(\'avaleht\') }}">Tagasi avalehele</a>\n' +
    '        </div>\n' +
    '    </body>\n' +
    '</html>';
  iconCode = '<link rel="shortcut icon" href="{{ url_for(\'static\', filename=\'ikoon.png\') }}">';

}
