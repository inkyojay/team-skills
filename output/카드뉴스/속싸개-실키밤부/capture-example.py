from playwright.sync_api import sync_playwright
import os

html_path = os.path.abspath('example-template.html')
output_dir = os.path.dirname(html_path)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 2160, 'height': 6000})
    page.goto(f'file://{html_path}')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)

    for i in range(1, 5):
        card = page.locator(f'#card-{i}')
        output_path = os.path.join(output_dir, f'example-card-{i}.png')
        card.screenshot(path=output_path)
        print(f'Saved example-card-{i}.png')

    browser.close()

print('Done! 4 example cards captured.')
