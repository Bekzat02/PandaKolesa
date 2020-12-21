package com.CarSaleWebsite.Kolesa.Controllers;

import com.CarSaleWebsite.Kolesa.DTO.AjaxResponseBody;
import com.CarSaleWebsite.Kolesa.Methods.StringConfigurerMethods;
import com.CarSaleWebsite.Kolesa.Models.Category;
import com.CarSaleWebsite.Kolesa.Models.Food;
import com.CarSaleWebsite.Kolesa.Repositories.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class ExampleController {

    @Autowired
    private final FoodRepository foodRepository;

    private class foodNames{
        public List<String> names;

        public foodNames(List<String> names) {
            this.names = names;
        }

        public List<String> getNames() {
            return names;
        }

        public void setNames(List<String> names) {
            this.names = names;
        }
    }

    public ExampleController(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @GetMapping("/foodsss")
    public Iterable<Food> foods() {
        return foodRepository.findAll();
    }

    @PostMapping("/food/ass")
    @ResponseBody
    public ResponseEntity<?> addFood(@RequestBody Food food) {
        food.setName(StringConfigurerMethods.replaceWhiteSpaceWithMinus(food.getName()));
        food.setCategory(StringConfigurerMethods.replaceWhiteSpaceWithMinus(food.getCategory()));
        foodRepository.save(food);
        return ResponseEntity.ok("success");
    }
    @GetMapping("/getCategories")
    public Category getCategories(){
        Category category=new Category();
        category.setCategories(foodRepository.findAllCategories());
        category.setFoods(foodRepository.findAll());
        return category;
    }
}
