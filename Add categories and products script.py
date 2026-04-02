from products.models import Category, Product, Specification, Variant
from decimal import Decimal
from authentication.models import User

# ------------------ USER ------------------
user , _ = User.objects.get_or_create(email="admin@urbanthread.co", defaults={"username": "admin"})

# ------------------ CATEGORIES ------------------
categories_data = ["T-Shirts", "Hoodies", "Jackets", "Pants", "Accessories"]

categories = {}

for title in categories_data:
    category, _ = Category.objects.get_or_create(title=title)
    categories[title] = category

print("Categories created")

# ------------------ PRODUCTS ------------------
products_data = [
    {"title": "Essential Black Tee", "description": "Premium cotton black t-shirt designed for everyday comfort and a clean look.", "price": Decimal("2499"),  "category": "T-Shirts", "stock": 25, "sizes": ["S", "M", "L", "XL"], "specs": {"Material": "100% Cotton", "Fit": "Regular", "Style": "Casual"}},
    {"title": "Oversized Grey Hoodie", "description": "Soft fleece oversized hoodie for a relaxed streetwear vibe.", "price": Decimal("4999"),  "category": "Hoodies", "stock": 15, "sizes": ["M", "L", "XL"], "specs": {"Material": "Fleece", "Fit": "Oversized", "Season": "Winter"}},
    {"title": "Classic Denim Jacket", "description": "Timeless denim jacket built for durability and style.", "price": Decimal("7999"), "category": "Jackets", "stock": 10, "sizes": ["M", "L"], "specs": {"Material": "Denim", "Fit": "Regular", "Durability": "High"}},
    {"title": "Slim Fit Cargo Pants", "description": "Functional cargo pants with a modern slim fit design.", "price": Decimal("4599"),"category": "Pants", "stock": 20, "sizes": ["30", "32", "34", "36"], "specs": {"Material": "Cotton Blend", "Fit": "Slim Fit", "Pockets": "Multiple"}},
    {"title": "Minimal Cap", "description": "Clean and minimal cap to complete your everyday outfit.", "price": Decimal("1499"), "category": "Accessories", "stock": 30, "sizes": ["Free Size"], "specs": {"Material": "Polyester", "Style": "Minimal", "Adjustable": "Yes"}},
]

for item in products_data:
    product, created = Product.objects.get_or_create(
        title=item["title"],
        defaults={
            "user": user,
            "description": item["description"],
            "price": item["price"],
            "category": categories[item["category"]],
            "stock_quantity": item["stock"],
            "status": "Published",
            "featured": True,
        },
    )
    if created:
        for size in item["sizes"]:
            Variant.objects.create(product=product, name=size, price=product.price)
        for key, value in item["specs"].items():
            Specification.objects.create(product=product, title=key, content=value)


print("Products, sizes, and specifications created")
