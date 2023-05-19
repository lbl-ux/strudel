# Build HTML
import chevron
import json
from pathlib import Path
import sys


def find_templates():
    root = Path("mustache/pages")
    for p in root.glob("**/*.mustache"):
        yield p


def main():
    # Check location
    cwd = Path.cwd()
    if cwd.name != "website":
        print("You must run this script from within the 'website' directory!")
        return -1
    # Setup input paths
    partials_dir = Path("mustache/partials")
    data_file = Path("mustache/data.json")
    # Load data
    with data_file.open("r", encoding="utf-8") as f:
        data = json.load(f)
    # Loop over templates
    for input_path in find_templates():
        # Read template
        with input_path.open("r", encoding="utf-8") as f:
            result = chevron.render(f, data, partials_path=partials_dir)
        # Construct output path
        output_path = Path("html")
        for p in input_path.parts[2:-1]:
            output_path /= p
        output_path /= f"{input_path.stem}.html"
        # Write rendered template to output path
        with output_path.open("w", encoding="utf-8") as f:
            f.write(result)
        print(f"{input_path} -> {output_path}")


if __name__ == "__main__":
    sys.exit(main())
