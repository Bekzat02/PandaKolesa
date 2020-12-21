package com.CarSaleWebsite.Kolesa.Models;


import com.CarSaleWebsite.Kolesa.Repositories.FoodRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class Category {
    private Iterable<Food> foods;
    private Iterable<String> categories;

    public Category(Iterable<Food> foods, Iterable<String> categories) {
        this.foods = foods;
        this.categories = categories;
    }

    public Category() {
    }

    public Iterable<Food> getFoods() {
        return foods;
    }

    public void setFoods(Iterable<Food> foods) {
        this.foods = foods;
    }

    public Iterable<String> getCategories() {
        return categories;
    }

    public void setCategories(Iterable<String> categories) {
        this.categories = categories;
    }

}
