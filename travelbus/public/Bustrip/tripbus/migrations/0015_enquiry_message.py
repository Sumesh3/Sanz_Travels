# Generated by Django 4.2.3 on 2023-12-14 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tripbus", "0014_passenger_details_statuz"),
    ]

    operations = [
        migrations.CreateModel(
            name="Enquiry_Message",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(max_length=100)),
                ("Email", models.CharField(max_length=100)),
                ("Subject", models.CharField(max_length=500)),
                ("Message", models.CharField(max_length=1000)),
            ],
        ),
    ]