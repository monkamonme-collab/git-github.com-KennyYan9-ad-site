# Read file
with open('src/pages/tools/compare-aging.astro', 'r', encoding='utf-8') as f:
    lines = f.readlines()

line = lines[187]  # Line 188

print(f"Looking for pattern in line...")

# Find where the pattern is
pattern_old = '\uff08<10kg\uff09'  # （<10kg）with raw <
pattern_new = '\uff08<10kg>\uff09'  # （<10kg）with HTML entities

print(f"OLD pattern bytes: {[hex(ord(c)) for c in pattern_old]}")
print(f"NEW pattern bytes: {[hex(ord(c)) for c in pattern_new]}")

if pattern_old in line:
    new_line = line.replace(pattern_old, pattern_new)
    lines[187] = new_line
    
    with open('src/pages/tools/compare-aging.astro', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Fixed!")
else:
    print("Pattern not found in line")
    # Search for the pattern manually
    for i in range(len(line)-7):
        if line[i:i+7] == '\uff08<10kg\uff09':
            print(f"Found at position {i}")
            print(f"Context: {[hex(ord(c)) for c in line[i:i+10]]}")