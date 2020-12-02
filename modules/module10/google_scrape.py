from splinter import Browser
from bs4 import BeautifulSoup as soup
from webdriver_manager.chrome import ChromeDriverManager

# Scrape the Google webpage and return a dict of info about the doodle
def scrape():
    # Setup splinter
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)
    
    # Visit the page with Splinter
    browser.visit("http://google.com")

    # Get the HTML content of the webpage using Splinter
    html = browser.html

    # Use BeautifulSoup to get the contents of the div with id=hplogo
    google_soup = soup(html, 'html.parser')
    the_div = google_soup.select_one("#hplogo")
    the_anchor = the_div.find("a")
    the_img = the_anchor.find("img")
    the_img['src']
    doodle_url = "http://google.com" + the_img['src']
    doodle_url
    doodle_title = the_img['title']
    doodle_title


    # Create a dictionary to insert into the database
    google_doodle_info = { 'url' : doodle_url, 'title' : doodle_title}
    
    return google_doodle_info
