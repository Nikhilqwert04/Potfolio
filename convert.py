import re

with open('/home/the_qwert/Desktop/Coding/Projects/Projects/Portfolio-2/index.html', 'r') as f:
    html = f.read()

# Extract content from <hero id="UP"> to the end of the section just before <footer>
start = html.find('<hero id="UP">')
end = html.find('<footer id="DOWN"')
if start == -1 or end == -1:
    print("Could not find start or end")
    exit(1)

content = html[start:end]

# Convert class to className
content = content.replace('class="', 'className="')
content = content.replace("class='", "className='")

# Convert unclosed img tags
content = re.sub(r'(<img[^>]*?[^/])>', r'\1 />', content)

# Convert unclosed hr tags
content = re.sub(r'(<hr[^>]*?[^/])>', r'\1 />', content)

# Convert unclosed br tags
content = re.sub(r'(<br[^>]*?[^/])>', r'\1 />', content)

# Comments in JSX
# We need to replace HTML comments <!-- ... --> with JSX comments {/* ... */}
content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)

# Inline styles? Let's hope there are none, but we can check.
if 'style="' in content:
    print("Warning: inline styles found, might need manual fixing.")

jsx = f"""import React from 'react'

const MainContent = () => {{
  return (
    <>
{content}    </>
  )
}}

export default MainContent
"""

with open('/home/the_qwert/Desktop/Coding/Projects/Projects/Potfolio/src/components/mainContent.jsx', 'w') as f:
    f.write(jsx)

print("Conversion complete!")
