# Generated by Django 4.2.3 on 2023-10-20 11:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        (
            "tripbus",
            "0003_rename_bus_owner_registartion_bus_company_registartion_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="bus_tb",
            name="login_id",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="tripbus.login",
            ),
            preserve_default=False,
        ),
    ]